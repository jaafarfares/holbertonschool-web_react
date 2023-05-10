// Import the necessary modules and functions
import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

// Test the getFullYear function
describe('getFullYear', () => {
  it('should return the current year', () => {
    const year = new Date().getFullYear();
    expect(getFullYear()).toEqual(year);
  });
});

// Test the getFooterCopy function
describe('getFooterCopy', () => {
  it('should return Holberton School when passed true', () => {
    expect(getFooterCopy(true)).toEqual('Holberton School');
  });

  it('should return Holberton School main dashboard when passed false', () => {
    expect(getFooterCopy(false)).toEqual('Holberton School main dashboard');
  });
});

// Test the getLatestNotification function
describe('getLatestNotification', () => {
  it('should return the correct HTML string', () => {
    const notification = '<strong>Urgent requirement</strong> - complete by EOD';
    expect(getLatestNotification()).toEqual(notification);
  });
});
