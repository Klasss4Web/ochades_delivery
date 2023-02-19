export const formatToNaira = (amount) => {

  if(!amount) return;
    const toNumber = parseInt(amount, 10);
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(toNumber);
}