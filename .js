/**
 * Logs out all of the guests who have paid.
 * @param {Object[]} guests - An array of guest objects. See the instructions and tests for a full breakdown of what is in each guest object.
 */
 function logPaidGuests(guests) {
    const result = [];
    for (let i=0; i < guests.length; i++){
      guests.push(i)
    }return result 
  }
  
  /**
   * Logs out all of the guests who have checked in.
   * @param {Object[]} guests - An array of guest objects. See the instructions and tests for a full breakdown of what is in each guest object.
   */
  function logCheckedInGuests(guests) {
    const result = [];
    for(let i=0; i<guests.length; i++){
      guests.push(i)
    }return result
  }
  
  /**
   * Logs out ticket discounts associated with the guest's name.
   * @param {Object[]} guests - An array of guest objects. See the instructions and tests for a full breakdown of what is in each guest object.
   * @param {number} youngAdult - The maximum age allowed to secure a "Young Adult Discount".
   * @param {number} seniorDiscountAge - The minimum age allowed to secure a "Senior Discount".
   */
  function logTicketDiscounts(guests, youngAdult, seniorDiscountAge) {
    const result = [];
    for(let i=0; i< guests.length; i++){
      if(youngAdult < 18){
        return youngAdultDiscount
      }else if(seniorDiscountAge > 90){
        return seniorDiscount
      }
    }
  }
  
  
  /**
   * Logs out ticket discounts associated with the guest's name.
   * @param {Object[]} guests - An array of guest objects. See the instructions and tests for a full breakdown of what is in each guest object.
   * @param {number} hour - The current hour. Should be between 0 - 23.
   * @param {number} minute - The current minute. Should be between 0 - 59.
   */
  function logLateGuests() {}
  
  /**
   * Logs out true if the guest with the given preferred name and surname has checked in, or false if they have not. If the guest cannot be found, logs out a message to say so.
   * @param {Object[]} guests - An array of guest objects. See the instructions and tests for a full breakdown of what is in each guest object.
   * @param {string} preferred - The selected guest's preferred name.
   * @param {string} surname - The selected guest's surname, or last name.
   */
  function logIfGuestHasCheckedInByName() {}
  
  module.exports = {
    logPaidGuests,
    logCheckedInGuests,
    logTicketDiscounts,
    logLateGuests,
    logIfGuestHasCheckedInByName,
  };
  