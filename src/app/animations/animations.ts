import { trigger, state, style, animate, transition } from '@angular/animations';




export const Animations = {
    animateMenu: trigger('changeWidth', [
        state('state1', style({
          width: '75px',
          transform: 'scale(1)'
        })),
        state('state2', style({
          width: '270px',
          transform: 'scale(1)'
        })),
        transition('*=>state1', animate('300ms')),
        transition('*=>state2', animate('300ms'))
      ]),
      animateCloseMenu: trigger('changeWidth2', [
        state('state1', style({
          margin: '0px 0px 0px 75px',
          transform: 'scale(1)'
        })),
        state('state2', style({
          margin: '0 0 0 270px',
          transform: 'scale(1)'
        })),
        transition('*=>state1', animate('300ms')),
        transition('*=>state2', animate('300ms'))
      ]),
      animateMenuButton1: trigger('changeFirst', [
        state('state1', style({
          left: '45px',
          transform: 'none'
        })),
        state('state2', style({
          left: '0px',
          transform: 'rotate(45deg) translate(6px, 4px)'
        })),
        transition('*=>state1', animate('100ms')),
        transition('*=>state2', animate('100ms'))
      ]),
      animateMenuButton2: trigger('changeSecond', [
        state('state1', style({
          left: '45px',
          opacity: '1',
          transform: 'none'
        })),
        state('state2', style({
          left: '0px',
          opacity: '0'
        })),
        transition('*=>state1', animate('100ms')),
        transition('*=>state2', animate('100ms'))
      ]),
      animateMenuButton3: trigger('changeThird', [
        state('state1', style({
          left: '45px',
          transform: 'none'
        })),
        state('state2', style({
          left: '0px',
          transform: 'rotate(-45deg) translate(7px, -4px)'
        })),
        transition('*=>state1', animate('100ms')),
        transition('*=>state2', animate('100ms')),
      ]),
        animateMenu2: trigger('changeMenu', [
          state('state1', style({
            display: 'none'
          })),
          state('state2', style({
            display: 'inline-block'
          })),
          transition('*=>state1', animate('1ms')),
          transition('*=>state2', animate('1ms'))
      ]),
      animateHero: trigger('flyUpDown', [
        state('down', style({ opacity: '100%' })),
        state('up', style({ opacity: '0%' })),
        transition('* => up',
          animate('500ms')),
        transition('* => down',
          animate('1000ms'))
      ]),
      animateHero2: trigger('flyInOut', [
        state('in', style({ margin: '0px'})),
        state('out', style({ margin: '0 0 0 -1000px' })),
        transition('* => out', 
          animate('500ms')
        ),
        transition('* => in',
          animate('1000ms')
        )
      ])
};
