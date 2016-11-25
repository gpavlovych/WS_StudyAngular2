import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MystubComponent } from './mystub/mystub.component';
import { ModalModule } from 'ng2-bootstrap/ng2-bootstrap'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { GameTicTacToeComponent } from './game-tic-tac-toe/game-tic-tac-toe.component';
import { DisplayCrossZeroPipe } from './game-tic-tac-toe/display-cross-zero.pipe';
import { DropdownDirective } from 'ng2-bootstrap/ng2-bootstrap';
import { DropdownMenuDirective } from 'ng2-bootstrap/ng2-bootstrap';
import { DropdownToggleDirective } from 'ng2-bootstrap/ng2-bootstrap';
import { ComponentsHelper } from 'ng2-bootstrap/ng2-bootstrap';
import { GroupByPipe } from './group-by.pipe';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Top100playersComponent } from './top100players/top100players.component'

const appRoutes: Routes = [
  {path:'tictactoe', component: GameTicTacToeComponent},
  { path: 'mystub', component: MystubComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MystubComponent,
    PageNotFoundComponent,
    HomeComponent,
    GameTicTacToeComponent,
    DisplayCrossZeroPipe,
    GroupByPipe,
    DropdownDirective,
    DropdownMenuDirective,
    DropdownToggleDirective,
    LoginComponent,
    RegisterComponent,
    Top100playersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ModalModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [{provide: ComponentsHelper, useClass: ComponentsHelper}],
  bootstrap: [AppComponent]
})
export class AppModule { }
