import { Resource, Booking, BorrowedItem, ResourceType, Availability } from './types';

export const MOCK_RESOURCES: Resource[] = [
  {
    id: 'book1',
    type: ResourceType.Book,
    title: 'The Design of Everyday Things',
    author: 'Don Norman',
    location: 'Floor 3, Shelf 72.1',
    availability: Availability.Available,
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1388286991l/18873426.jpg',
  },
  {
    id: 'book2',
    type: ResourceType.Book,
    title: 'Atomic Habits',
    author: 'James Clear',
    location: 'Floor 2, Shelf 15.3',
    availability: Availability.CheckedOut,
    nextAvailableTime: 'Tomorrow, 10:00 AM',
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1535115320l/40121378.jpg',
  },
   {
    id: 'book3',
    type: ResourceType.Book,
    title: 'Rich Dad Poor Dad',
    author: 'Robert T. Kiyosaki',
    location: 'Floor 1, Shelf 34.2',
    availability: Availability.Available,
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1661032488l/62315793.jpg',
  },
  {
    id: 'book4',
    type: ResourceType.Book,
    title: 'The Psychology of Money',
    author: 'Morgan Housel',
    location: 'Floor 2, Shelf 18.1',
    availability: Availability.Available,
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1589325997l/41881472.jpg',
  },
  {
    id: 'book5',
    type: ResourceType.Book,
    title: 'Sapiens: A Brief History of Humankind',
    author: 'Yuval Noah Harari',
    location: 'Floor 1, Shelf 8.9',
    availability: Availability.CheckedOut,
    nextAvailableTime: 'In 2 days',
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1420585954l/23692271.jpg',
  },
  {
    id: 'book6',
    type: ResourceType.Book,
    title: 'Thinking, Fast and Slow',
    author: 'Daniel Kahneman',
    location: 'Floor 3, Shelf 66.7',
    availability: Availability.Available,
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1317793965l/11468377.jpg',
  },
  {
    id: 'room1',
    type: ResourceType.Room,
    title: 'Collaboration Room 204',
    location: 'Floor 2',
    availability: Availability.Available,
    imageUrl: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&q=80',
  },
  {
    id: 'room2',
    type: ResourceType.Room,
    title: 'Quiet Study Pod 3B',
    location: 'Floor 3',
    availability: Availability.Reserved,
    nextAvailableTime: 'Today, 2:00 PM',
    imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&q=80',
  },
  {
    id: 'equip1',
    type: ResourceType.Equipment,
    title: 'MacBook Pro Charger',
    location: 'Front Desk',
    availability: Availability.Available,
    imageUrl: 'https://images.unsplash.com/photo-1588621469421-2e2d035c87e4?w=400&q=80',
  },
  {
    id: 'equip2',
    type: ResourceType.Equipment,
    title: 'Projector Kit',
    location: 'AV Desk',
    availability: Availability.CheckedOut,
    nextAvailableTime: 'Today, 5:00 PM',
    imageUrl: 'https://images.unsplash.com/photo-1535016120720-40c646be5580?w=400&q=80',
  },
];

export const MOCK_UPCOMING_BOOKINGS: Booking[] = [
  {
    id: 'booking1',
    resource: MOCK_RESOURCES[6], // Collaboration Room 204
    startTime: 'Today, 3:00 PM',
    endTime: '5:00 PM',
    isUpcoming: true,
  },
  {
    id: 'booking2',
    resource: MOCK_RESOURCES[8], // MacBook Pro Charger
    startTime: 'Tomorrow, 9:00 AM',
    endTime: '12:00 PM',
    isUpcoming: true,
  }
];

export const MOCK_PAST_BOOKINGS: Booking[] = [
    {
        id: 'booking3',
        resource: MOCK_RESOURCES[7], // Quiet Study Pod 3B
        startTime: 'Yesterday, 1:00 PM',
        endTime: '2:00 PM',
        isUpcoming: false,
    }
];

export const MOCK_BORROWED_ITEMS: BorrowedItem[] = [
  {
    id: 'borrow1',
    resource: MOCK_RESOURCES[2], // Rich Dad Poor Dad
    dueDate: 'In 3 days',
    isOverdue: false,
  },
  {
    id: 'borrow2',
    resource: MOCK_RESOURCES[4], // Sapiens
    dueDate: 'Overdue by 2 days',
    isOverdue: true,
  }
];

export const USER_PROFILE = {
    name: 'Alex Johnson',
    universityId: 'ajohnson24',
    email: 'alex.j@university.edu',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80'
};