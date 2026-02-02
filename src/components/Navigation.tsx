import { NavLink } from 'react-router-dom';
import { components, layout } from '@/styles';

export function Navigation() {
  const linkClasses = (isActive: boolean) =>
    `transition-colors relative pb-1 ${
      isActive
        ? 'text-[var(--color-text-primary)]'
        : 'text-[var(--color-text-secondary)] hover:text-[var(--color-navy)]'
    } after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[var(--color-navy)] after:transition-all after:duration-300 hover:after:w-full ${
      isActive ? 'after:w-full' : ''
    }`;

  return (
    <header className={components.nav.container}>
      <div className={layout.container.wide + ' py-5'}>
        <div className="flex items-center justify-between">
          <NavLink to="/" end className="flex items-center text-[var(--color-navy)]">
            <h3>Alpha Market Notes</h3>
          </NavLink>

          <nav className="flex items-center gap-10">
            <NavLink to="/" end className={({ isActive }) => linkClasses(isActive)}>
              Home
            </NavLink>
            <NavLink to="/market-outlook" className={({ isActive }) => linkClasses(isActive)}>
              Market Outlook
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => linkClasses(isActive)}>
              About Me
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => linkClasses(isActive)}>
              Contact
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
}
