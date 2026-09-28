import { EditorialButton } from "@/components/ui/EditorialButton";

export default function NotFound() {
  return (
    <section className="empty-proof">
      <div className="ed-wrap">
        <p className="ed-kicker">Lost path</p>
        <p>404</p>
        <h2>This page is not on the map.</h2>
        <p>The link may be outdated. Head home, or start from the work and services.</p>
        <div className="form-success-actions">
          <EditorialButton href="/" tone="cream">
            Back home
          </EditorialButton>
          <EditorialButton href="/work" tone="ghost">
            View work
          </EditorialButton>
        </div>
      </div>
    </section>
  );
}
