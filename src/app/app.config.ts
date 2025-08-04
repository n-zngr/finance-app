import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { LUCIDE_ICONS, LucideIconProvider, LayoutDashboard, UserRound } from 'lucide-angular';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
    providers: [
        provideBrowserGlobalErrorListeners(),
        provideZonelessChangeDetection(),
        provideRouter(routes),
        {
            provide: LUCIDE_ICONS,
            multi: true,
            useValue: new LucideIconProvider({
                LayoutDashboard,
                UserRound
            }),
        },
    ],
};
