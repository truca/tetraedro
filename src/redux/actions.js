export const actionTypes = {
  selectUp: "selectUp",
  selectDown: "selectDown",
  select: "select"
};

export const actions = {
  selectUp: () => ({ type: actionTypes.selectUp }),
  selectDown: () => ({ type: actionTypes.selectDown }),
  select: id => ({ type: actionTypes.select, id })
};
