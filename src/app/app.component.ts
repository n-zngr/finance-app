import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';

export class AppModule { }
@Component({
    selector: 'app-root',
    imports: [
        RouterOutlet, 
        LucideAngularModule
    ],
    templateUrl: './app.component.html',
})

export class App {
    protected readonly title = signal('finance-app');
}
