import Link from 'next/link';
import {
  getPrimaryRouteRole,
  getRouteNavigationTree,
  routeRoleLabels,
  type RouteCategoryId,
  type RouteCityRole,
  type RouteSlug,
} from '@/data/routeNavigation';

type RouteTreeNavProps = {
  activeRouteSlug?: RouteSlug;
  activeCitySlug?: string;
  activeCategoryId?: RouteCategoryId;
};

const roleGlyphs: Record<RouteCityRole, string> = {
  hub: '●',
  junction: '◇',
  anchor: '★',
  pause: '·',
  scenic: '⌁',
  start: '▶',
  end: '■',
};

export default function RouteTreeNav({
  activeRouteSlug,
  activeCitySlug,
  activeCategoryId = 'overview',
}: RouteTreeNavProps) {
  const routes = getRouteNavigationTree();

  return (
    <nav className="route-tree" aria-label="Route navigation">
      {routes.map((route) => {
        const routeActive = route.routeSlug === activeRouteSlug;

        return (
          <section className="route-tree__route" key={route.routeSlug}>
            <Link
              className={routeActive ? 'route-tree__route-link is-active' : 'route-tree__route-link'}
              href={route.href}
            >
              {route.label}
            </Link>
            {routeActive ? (
              <ol className="route-tree__cities">
                {route.cities.map((city) => {
                  const cityActive = city.slug === activeCitySlug;
                  const primaryRole = getPrimaryRouteRole(city.roles);

                  return (
                    <li className="route-tree__city" key={city.slug}>
                      <Link
                        className={cityActive ? 'route-tree__city-link is-active' : 'route-tree__city-link'}
                        href={city.href}
                      >
                        <span>{city.name}</span>
                        <span
                          className="route-tree__role"
                          aria-label={routeRoleLabels[primaryRole]}
                          title={routeRoleLabels[primaryRole]}
                        >
                          {roleGlyphs[primaryRole]}
                        </span>
                      </Link>
                      {cityActive ? (
                        <ol className="route-tree__categories">
                          {city.categories.map((category) => (
                            <li key={category.id}>
                              <Link
                                className={
                                  category.id === activeCategoryId
                                    ? 'route-tree__category-link is-active'
                                    : 'route-tree__category-link'
                                }
                                href={`${city.href}${category.hrefSuffix}`}
                              >
                                {category.label}
                              </Link>
                            </li>
                          ))}
                        </ol>
                      ) : null}
                    </li>
                  );
                })}
              </ol>
            ) : null}
          </section>
        );
      })}
    </nav>
  );
}
