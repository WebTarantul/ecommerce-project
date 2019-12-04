import { types as t } from 'mobx-state-tree';

export const UserModel = t
  .model('UserModel', {
    id: t.number,
    fullName: t.string,
    location: t.maybeNull(t.string),
    avatar: t.maybeNull(t.string),
    phone: t.maybeNull(t.string),
    createdAt: t.maybeNull(t.string),
    updatedAt: t.maybeNull(t.string),
    email: t.string,
  })
  .views((self) => ({
    getInitials() {
      return self.fullName
        .split(' ')
        .map((n) => n[0])
        .join('');
    },
    getColor() {
      const colors = [
        'red',
        'black',
        'pink',
        'yellow',
        'red',
        'black',
        'pink',
        'yellow',
        'red',
        'black',
        'pink',
        'yellow',
        'red',
        'black',
        'pink',
        'yellow',
      ];
      const initials = self.getInitials();
      const code = initials.charCodeAt(0) + initials.charCodeAt(1);
      const index = code % colors.length;

      return colors[index];
    },
  }));
