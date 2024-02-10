import Link from 'next/link';
import React from 'react';
import { twMerge } from 'tailwind-merge';

import Settings from '../settings/settings';
import Trash from '../trash/trash';
import { Home, Cog, Trash2, Plus } from 'lucide-react';
import CustomDialogTrigger from '../global/custom-dialog-trigger';
import WorkspaceCreator from '../global/workspace-creator';

interface NativeNavigationProps {
  myWorkspaceId: string;
  className?: string;
}

const NativeNavigation: React.FC<NativeNavigationProps> = ({
  myWorkspaceId,
  className,
}) => {
  return (
    <nav className={twMerge('my-2', className)}>
      <ul className="flex flex-col gap-2">
        <li>
          <Link
            className="group/native
            flex
            text-Neutrals/neutrals-7
            transition-all
            gap-2
          "
            href={`/dashboard/${myWorkspaceId}`}
          >
            <Home />
            <span>My Workspace</span>
          </Link>
        </li>

        <Settings>
          <li
            className="group/native
            flex
            text-Neutrals/neutrals-7
            transition-all
            gap-2
            cursor-pointer
          "
          >
            <Cog />
            <span>Settings</span>
          </li>
        </Settings>

        <Trash>
          <li
            className="group/native
            flex
            text-Neutrals/neutrals-7
            transition-all
            gap-2
          "
          >
            <Trash2 />
            <span>Trash</span>
          </li>
        </Trash>

        <CustomDialogTrigger
              header=""
              content={<WorkspaceCreator />}
              description=""
            >
          <li
            className="group/native
            flex
            text-Neutrals/neutrals-7
            transition-all
            gap-2
          "
          >
                <Plus/>
                New workspace
              </li>
            </CustomDialogTrigger>
      </ul>
    </nav>
  );
};

export default NativeNavigation;
