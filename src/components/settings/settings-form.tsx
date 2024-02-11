// @ts-nocheck

'use client';
import React, { useEffect, useRef, useState } from 'react';
import { useToast } from '../ui/use-toast';
import { useAppState } from '@/lib/providers/state-provider';
import { User, workspace } from '@/lib/supabase/supabase.types';
import { useSupabaseUser } from '@/lib/providers/supabase-user-provider';
import { useRouter } from 'next/navigation';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import {
  Briefcase,
  CreditCard,
  ExternalLink,
  Lock,
  LogOut,
  Plus,
  Shapes,
  Share,
  User as UserIcon,
} from 'lucide-react';
import { Separator } from '../ui/separator';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import {
  addCollaborators,
  deleteWorkspace,
  getCollaborators,
  removeCollaborators,
  updateWorkspace,
} from '@/lib/supabase/queries';
import { v4 } from 'uuid';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

import CollaboratorSearch from '../global/collaborator-search';
import { Button } from '../ui/button';
import { ScrollArea } from '../ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Alert, AlertDescription } from '../ui/alert';
import LogoutButton from '../global/logout-button';
import Link from 'next/link';
import { useSubscriptionModal } from '@/lib/providers/subscription-modal-provider';
import { postData } from '@/lib/utils';

const SettingsForm = () => {
  const { toast } = useToast();
  const { user, subscription } = useSupabaseUser();
  const { open, setOpen } = useSubscriptionModal();
  const router = useRouter();
  const supabase = createClientComponentClient();
  const { state, workspaceId, dispatch } = useAppState();
  const [permissions, setPermissions] = useState('private');
  const [collaborators, setCollaborators] = useState<User[] | []>([]);
  const [openAlertMessage, setOpenAlertMessage] = useState(false);
  const [workspaceDetails, setWorkspaceDetails] = useState<workspace>();
  const titleTimerRef = useRef<ReturnType<typeof setTimeout>>();
  const [uploadingProfilePic, setUploadingProfilePic] = useState(false);
  const [uploadingLogo, setUploadingLogo] = useState(false);
  const [loadingPortal, setLoadingPortal] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState('')
  //WIP PAYMENT PORTAL

  const redirectToCustomerPortal = async () => {
    setLoadingPortal(true);
    try {
      const { url, error } = await postData({
        url: '/api/create-portal-link',
      });
      window.location.assign(url);
    } catch (error) {
      console.log(error);
      setLoadingPortal(false);
    }
    setLoadingPortal(false);
  };
  //addcollborators
  const addCollaborator = async (profile: User) => {
    if (!workspaceId) return;
    if (subscription?.status !== 'active' && collaborators.length >= 2) {
      setOpen(true);
      return;
    }
    await addCollaborators([profile], workspaceId);
    setCollaborators([...collaborators, profile]);
  };

  //remove collaborators
  const removeCollaborator = async (user: User) => {
    if (!workspaceId) return;
    if (collaborators.length === 1) {
      setPermissions('private');
    }
    await removeCollaborators([user], workspaceId);
    setCollaborators(
      collaborators.filter((collaborator) => collaborator.id !== user.id)
    );
    router.refresh();
  };

  //on change
  const workspaceNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!workspaceId || !e.target.value) return;
    dispatch({
      type: 'UPDATE_WORKSPACE',
      payload: { workspace: { title: e.target.value }, workspaceId },
    });
    if (titleTimerRef.current) clearTimeout(titleTimerRef.current);
    titleTimerRef.current = setTimeout(async () => {
      await updateWorkspace({ title: e.target.value }, workspaceId);
    }, 500);
  };

  const onChangeWorkspaceLogo = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (!workspaceId) return;
    const file = e.target.files?.[0];
    if (!file) return;
    const uuid = v4();
    setUploadingLogo(true);
    const { data, error } = await supabase.storage
      .from('workspace-logos')
      .upload(`workspaceLogo.${uuid}`, file, {
        cacheControl: '3600',
        upsert: true,
      });

    if (!error) {
      dispatch({
        type: 'UPDATE_WORKSPACE',
        payload: { workspace: { logo: data.path }, workspaceId },
      });
      await updateWorkspace({ logo: data.path }, workspaceId);
      setUploadingLogo(false);
    }
  };


  //   const onChangeProfilePicture = async (
  //   e: React.ChangeEvent<HTMLInputElement>
  // ) => {
  //   const file = e.target.value;
  //   let filePath = "";
  //   const uploadAvatar = async () => {
  //     const { data, error } = await supabase.storage
  //       .from("avatars")
  //       .upload(`avatar-${v4()}`, file, { cacheControl: "5", upsert: true });

  //     if (error) throw error;
  //     filePath = data.path;
  //   };

  //   const deleteAvatar = async (avatarUrl: string) => {
  //     const { data, error } = await supabase.storage
  //       .from("avatars")
  //       .remove([avatarUrl]);
  //     if (error) throw error;
  //     console.log("Avatar Delete Data:", data);
  //   };

  //   try {
  //     if (!avatarUrl) {
  //       await uploadAvatar();
  //     } else {
  //       await deleteAvatar(avatarUrl);
  //       await uploadAvatar();
  //     }
  //     setAvatarUrl(filePath);
  //     if (!user) return;
  //     const { data, error } = await (
  //       user.id
  //     );
  //     if (error) {
  //       toast({
  //         title: "Error",
  //         variant: "destructive",
  //         description: "Could not update the profile picture",
  //       });
  //     } else {
  //       toast({
  //         title: "Success",
  //         description: "Updated the profile picture",
  //       });
  //     }
  //   } catch (error) {
  //     console.log("Error in uploading profile picture:");
  //     console.log(error)
  //   }
  // };
 


  const onClickAlertConfirm = async () => {
    if (!workspaceId) return;
    if (collaborators.length > 0) {
      await removeCollaborators(collaborators, workspaceId);
    }
    setPermissions('private');
    setOpenAlertMessage(false);
  };

  const onPermissionsChange = (val: string) => {
    if (val === 'private') {
      setOpenAlertMessage(true);
    } else setPermissions(val);
  };

  //CHALLENGE fetching avatar details
  //WIP Payment Portal redirect

  useEffect(() => {
    const showingWorkspace = state.workspaces.find(
      (workspace) => workspace.id === workspaceId
    );
    if (showingWorkspace) setWorkspaceDetails(showingWorkspace);
  }, [workspaceId, state]);

  useEffect(() => {
    if (!workspaceId) return;
    const fetchCollaborators = async () => {
      const response = await getCollaborators(workspaceId);
      if (response.length) {
        setPermissions('shared');
        setCollaborators(response);
      }
    };
    fetchCollaborators();
  }, [workspaceId]);


 

  return (
    <div className="flex gap-4 flex-col ">
      <p className="flex items-center gap-2 mt-6">
        Workspace
      </p>
      <Separator />
      <div className="flex flex-col gap-2">
        <Label
          htmlFor="workspaceName"
          className="text-sm text-muted-foreground"
        >
          Name
        </Label>
        <Input
          name="workspaceName"
          value={workspaceDetails ? workspaceDetails.title : ''}
          placeholder="Workspace Name"
          onChange={workspaceNameChange}
        />
        <Label
          htmlFor="workspaceLogo"
          className="text-sm text-muted-foreground mt-2"
        >
          Your Workspace Logo
        </Label>
        <Input
          name="workspaceLogo"
          type="file"
          accept="image/*"
          placeholder="Workspace Logo"
          onChange={onChangeWorkspaceLogo}
          disabled={uploadingLogo || subscription?.status !== 'active'}
        />
        {subscription?.status !== 'active' && (
          <small className="text-muted-foreground">
            To customize your workspace, you need to be on a Premium Plan
          </small>
        )}
      </div>
      <>
        <Label htmlFor="permissions mb-1">Mode</Label>
        <Select
          onValueChange={onPermissionsChange}
          value={permissions}
        >
          <SelectTrigger className="w-full h-26 -mt-3">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="private">
                <div
                  className="p-2
                  flex
                  gap-4
                  justify-center
                  items-center
                "
                >
                  <Lock />
                  <article className="text-left flex flex-col">
                    <span>Private</span>
                    <p>
                    Your workspace is private. You can switch mode to collaboration so you can work as team.
                    </p>

                  </article>
                </div>
              </SelectItem>
              <SelectItem value="shared">
                <div className="p-2 flex gap-4 justify-center items-center">
                  <Shapes/>
                  <article className="text-left flex flex-col">
                    <span>Collaboration</span>
                    <span>Collaboration mode allows you to invite your team and work together. You can change the mode to private later</span>
                  </article>
                </div>
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        {permissions === 'shared' && (
          <div>
            <CollaboratorSearch
              existingCollaborators={collaborators}
              getCollaborator={(user) => {
                addCollaborator(user);
              }}
            >
              <Button
                type="button"
                className="text-sm mt-4 w-full gap-2"
              >
                <Plus />
                Invite Collaborators                

              </Button>
            </CollaboratorSearch>
            <div className="mt-4">
              <span className="text-sm text-muted-foreground">
              {collaborators.length || ''} Invited
              </span>
              <ScrollArea
                className="
            h-[150px]
            overflow-y-scroll
            w-full
            rounded-md
            border
            border-muted-foreground/20"
              >
                {collaborators.length ? (
                  collaborators.map((c) => (
                    <div
                      className="p-4 flex
                      justify-between
                      items-center
                "
                      key={c.id}
                    >
                      <div className="flex gap-4 items-center">
                        <Avatar>
                          {/* <AvatarImage src={user?.avatarUrl} /> */}
                          <AvatarFallback className="bg-pink-400 text-white">
                          {user?.email?.substring(0, 2).toUpperCase() || ''}
                          </AvatarFallback>
                        </Avatar>
                        <div
                          className="text-sm 
                          gap-2
                          text-muted-foreground
                          overflow-hidden
                          overflow-ellipsis
                          sm:w-[300px]
                          w-[140px]
                        "
                        >
                          {c.email}
                        </div>
                      </div>

                      
                        <Button
                        variant="secondary"
                        onClick={() => removeCollaborator(c)}
                      >
                        Remove
                      </Button>
                    </div>
                  ))
                ) : (
                  <div
                    className="absolute
                  right-0 left-0
                  top-0
                  bottom-0
                  flex
                  justify-center
                  items-center
                "
                  >
                    <span className="text-muted-foreground text-sm">
                    There are no collaborators invited

                    </span>
                  </div>
                )}
              </ScrollArea>
            </div>
          </div>
        )}
        <Alert variant='secondary'>
          <AlertDescription>
           Warning! You will lose all data in the workspace
          </AlertDescription>
          <Button
            type="submit"
            size={'sm'}
            variant='secondary'
            className="mt-4 
            text-sm
            border-0
            border-secondary"
            onClick={async () => {
              if (!workspaceId) return;
              await deleteWorkspace(workspaceId);
              toast({ title: 'Workspace has been deleted successfully 👍🏻' });
              dispatch({ type: 'DELETE_WORKSPACE', payload: workspaceId });
              router.replace('/dashboard');
            }}
          >
            Delete My Workspace
          </Button>
        </Alert>
        <Separator />

        <p className="flex items-center gap-2 mt-6">
          <UserIcon size={20} /> Account
        </p>
        <div className="flex items-center">
          <Avatar>
            <AvatarImage src={user?.avatarUrl ? user?.avatarUrl : ""} />
            <AvatarFallback className="bg-pink-400 text-white">
            {user.email.substring(0, 2).toUpperCase()}

            </AvatarFallback>
          </Avatar>
          {/* <div className="flex flex-col ml-6">
            <Label
              htmlFor="profilePicture"
              className="text-sm text-muted-foreground mt-2"
            >
              Picture
            </Label>
            <Input
              name="profilePicture"
              type="file"
              accept="image/*"
              placeholder="Profile Picture"
              onChange={onChangeProfilePicture}
              disabled={uploadingProfilePic}
            />
          </div> */}
        <div className="flex flex-col align-center ml-2 justify-center ">
          
        <small className="text-muted-foreground "> {/*Add command (cursor-not-allowed) behind text-muted-foreground later*/}
              {user ? user.email : ''}
            </small>        
            </div>

        <LogoutButton>
          <div className="flex items-center">
            <LogOut />
          </div>
        </LogoutButton>
        </div>
        <Separator />

        <p className="flex items-center gap-2 mt-2">
          <CreditCard size={20} /> Billings & Plan
        </p>
        <p className="text-muted-foreground">
          Your current plan: {' '}
          {subscription?.status === 'active' ? 'Premium' : 'Free'} Plan
        </p>
        <Link
          href="/"
          target="_blank"
          className="text-muted-foreground flex flex-row items-center gap-2"
        >
          View Plans <ExternalLink size={16} />
        </Link>
        {subscription?.status === 'active' ? (
          <div>
            <Button
              type="button"
              size="sm"
              variant={'secondary'}
              disabled={loadingPortal}
              className="text-sm"
              onClick={redirectToCustomerPortal}
            >
              Manage Subscription
            </Button>
          </div>
        ) : (
          <div>
            <Button
              type="button"
              size="sm"
              variant={'secondary'}
              className="text-sm"
              onClick={() => setOpen(true)}
            >
              Upgrade the plan
            </Button>
          </div>
        )}


      </>
      <AlertDialog open={openAlertMessage}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure ?</AlertDialogTitle>
            <AlertDescription>
             Changing the mode from Collaboration to Private removes all collaborators in the workspace.
            </AlertDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setOpenAlertMessage(false)}>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction onClick={onClickAlertConfirm}>
              I'm sure, switch to private
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default SettingsForm;
