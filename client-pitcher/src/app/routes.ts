import { Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';

// export const appRoutes: Routes = [
//     {
//         path: 'signup', component: UserComponent,
//         children: [{ path: ' ', component: SignUpComponent}]

//     }
//     // {
//     //     path: ' ', redirectTo: '/signup', pathMatch: 'full'
//     // }
// ];



export const appRoutes: Routes = [
    {
        path: 'signup', component: SignUpComponent

    }
    // {
    //     path: ' ', redirectTo: '/signup', pathMatch: 'full'
    // }
];