ALTER TABLE "folders" ADD COLUMN "bannerUrl" text;--> statement-breakpoint
ALTER TABLE "workspaces" ADD COLUMN "bannerUrl" text;--> statement-breakpoint
ALTER TABLE "folders" DROP COLUMN IF EXISTS "banner_url";--> statement-breakpoint
ALTER TABLE "workspaces" DROP COLUMN IF EXISTS "banner_url";