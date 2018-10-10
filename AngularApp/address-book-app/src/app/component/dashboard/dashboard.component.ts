import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../service/contact.service';
import { Contact } from '../../model/contact';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  title: string;
  logoUrl: string;
  ladyLogo: string;
  gentLogo: string;
  contacts: Contact[];

  constructor(private contactService: ContactService) {
    this.title = "Address Book 3.0";
    this.logoUrl = "/assets/images/adblogo.png";
    this.ladyLogo = "/assets/images/fem.jpg";
    this.gentLogo = "/assets/images/male.png";
  }
  ngOnInit() {
    this.contactService.getAllContacts().subscribe(
      (data) => this.contacts = data);
  }
}
