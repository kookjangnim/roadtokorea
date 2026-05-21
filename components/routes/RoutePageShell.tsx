import type { ReactNode } from 'react';
import RouteTreeNav from '@/components/routes/RouteTreeNav';
import {
  getRouteNavigationTree,
  type RouteCategoryId,
  type RouteSlug,
} from '@/data/routeNavigation';

type RoutePageShellProps = {
  activeRouteSlug: RouteSlug;
  activeCitySlug?: string;
  activeCategoryId?: RouteCategoryId;
  children: ReactNode;
};

export default function RoutePageShell({
  activeRouteSlug,
  activeCitySlug,
  activeCategoryId,
  children,
}: RoutePageShellProps) {
  const routes = getRouteNavigationTree();
  const activeRoute = routes.find((route) => route.routeSlug === activeRouteSlug);
  const activeCity = activeRoute?.cities.find((city) => city.slug === activeCitySlug);
  const activeCategory = activeCity?.categories.find(
    (category) => category.id === (activeCategoryId ?? 'overview'),
  );
  const contextLabel = [
    activeRoute?.label,
    activeCity?.name,
    activeCategory?.label,
  ].filter(Boolean).join(' / ');

  return (
    <div className="route-page-shell">
      <div className="route-page-shell__mobile">
        <details className="route-page-shell__mobile-details">
          <summary>
            <span>Route context</span>
            <strong>{contextLabel || activeRouteSlug}</strong>
          </summary>
          <RouteTreeNav
            activeRouteSlug={activeRouteSlug}
            activeCitySlug={activeCitySlug}
            activeCategoryId={activeCategoryId}
          />
        </details>
      </div>
      <aside className="route-page-shell__sidebar" aria-label="Route explorer">
        <RouteTreeNav
          activeRouteSlug={activeRouteSlug}
          activeCitySlug={activeCitySlug}
          activeCategoryId={activeCategoryId}
        />
      </aside>
      <main className="route-page-shell__content">{children}</main>
    </div>
  );
}
