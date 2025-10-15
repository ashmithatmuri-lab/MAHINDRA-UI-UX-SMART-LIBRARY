
export enum Screen {
  Home = 'Home',
  Search = 'Search',
  Bookings = 'Bookings',
  Borrowed = 'Borrowed',
  Profile = 'Profile',
}

export enum ResourceType {
  Book = 'Book',
  Room = 'Study Room',
  Equipment = 'Equipment',
}

export enum Availability {
  Available = 'Available',
  CheckedOut = 'Checked Out',
  Reserved = 'Reserved',
  NextAvailable = 'Next Available',
}

export interface Resource {
  id: string;
  type: ResourceType;
  title: string;
  author?: string;
  location: string;
  availability: Availability;
  nextAvailableTime?: string;
  imageUrl: string;
}

export interface Booking {
  id: string;
  resource: Resource;
  startTime: string;
  endTime: string;
  isUpcoming: boolean;
}

export interface BorrowedItem {
  id: string;
  resource: Resource;
  dueDate: string;
  isOverdue: boolean;
}
