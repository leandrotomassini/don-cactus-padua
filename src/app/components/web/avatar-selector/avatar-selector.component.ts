import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-avatar-selector',
  templateUrl: './avatar-selector.component.html',
  styleUrls: ['./avatar-selector.component.scss'],
})
export class AvatarSelectorComponent implements OnInit {

  @Output() avatarSel = new EventEmitter<string>();

  avatars = [
    {
      img: 'https://i.imgur.com/l4L4idL.png',
      seleccionado: true
    },
    {
      img: 'https://i.imgur.com/C6CAIzk.gif',
      seleccionado: false
    },
    {
      img: 'https://i.imgur.com/85h8DWp.jpeg',
      seleccionado: false
    },
    {
      img: 'https://i.imgur.com/85h8DWp.jpeg',
      seleccionado: false
    },
    {
      img: 'https://i.imgur.com/85h8DWp.jpeg',
      seleccionado: false
    },
    {
      img: 'https://i.imgur.com/85h8DWp.jpeg',
      seleccionado: false
    },
    {
      img: 'https://i.imgur.com/85h8DWp.jpeg',
      seleccionado: false
    },
    {
      img: 'https://i.imgur.com/85h8DWp.jpeg',
      seleccionado: false
    },
  ];

  avatarSlide = {
    slidesPerView: 3.5
  };

  constructor() { }

  ngOnInit() { }

  seleccionarAvatar(avatar) {
    this.avatars.forEach(av => av.seleccionado = false);
    avatar.seleccionado = true;
    this.avatarSel.emit(avatar.img);
  }

}
