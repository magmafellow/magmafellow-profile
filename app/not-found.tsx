import BlogpostTags from "@/app/ui/blogpost-tags/main";
import DefaultGrid from "@/app/ui/default-grid/main";
import InfoCard from "@/app/ui/info-card/main";
import NotFound from "@/app/ui/not-found/main";
import Stats from "@/app/ui/stats/main";

export default function Page() {
  return (
    <DefaultGrid>
      <Stats />
      <InfoCard />
      <BlogpostTags />
      <NotFound />
    </DefaultGrid>
  )
}