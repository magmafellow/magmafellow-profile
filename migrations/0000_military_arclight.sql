CREATE TABLE IF NOT EXISTS "blogs_table" (
	"id" integer PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"bite" text NOT NULL,
	"date_created" timestamp DEFAULT now() NOT NULL,
	"content" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "blogs_tags_table" (
	"id" integer PRIMARY KEY NOT NULL,
	"blog_id" integer,
	"tag_id" integer
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "projects_table" (
	"id" integer PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"description" text NOT NULL,
	"features" text NOT NULL,
	"resumte" text NOT NULL,
	"pictures" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "projects_tags_table" (
	"id" integer PRIMARY KEY NOT NULL,
	"project_id" integer,
	"tag_id" integer
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "tags_table" (
	"id" integer PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"description" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users_table" (
	"id" integer PRIMARY KEY NOT NULL,
	"username" text NOT NULL,
	"password" text NOT NULL,
	"email" text NOT NULL,
	CONSTRAINT "users_table_email_unique" UNIQUE("email")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "blogs_tags_table" ADD CONSTRAINT "blogs_tags_table_blog_id_blogs_table_id_fk" FOREIGN KEY ("blog_id") REFERENCES "public"."blogs_table"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "blogs_tags_table" ADD CONSTRAINT "blogs_tags_table_tag_id_tags_table_id_fk" FOREIGN KEY ("tag_id") REFERENCES "public"."tags_table"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "projects_tags_table" ADD CONSTRAINT "projects_tags_table_project_id_projects_table_id_fk" FOREIGN KEY ("project_id") REFERENCES "public"."projects_table"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "projects_tags_table" ADD CONSTRAINT "projects_tags_table_tag_id_tags_table_id_fk" FOREIGN KEY ("tag_id") REFERENCES "public"."tags_table"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
