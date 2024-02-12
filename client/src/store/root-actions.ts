import * as userActions from "./slices/user/user.actions";
import * as favouritesActions from "./slices/favourites/favourites.actions";
import * as basketActions from "./slices/basket/basket.actions";

export const rootActions = {
  ...userActions,
  ...favouritesActions,
  ...basketActions
};
