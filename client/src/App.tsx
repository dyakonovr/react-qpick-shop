import { Toaster } from "@/components/ui/toaster";
import { useEffect } from "react";
import fetchBasket from "./api (old)/fetchBasket";
import fetchBasketProducts from "./api (old)/fetchBasketProducts";
import fetchIsAuth from "./api (old)/fetchIsAuth";
import Paths from "./components/routes/Routes";
import { useAppDispatch } from "./hooks/useAppDispatch";
import { useAppSelector } from "./hooks/useAppSelector";

function App() {
  const dispatch = useAppDispatch();
  const userId = useAppSelector(state => state.userSlice.id);
  const basketId = useAppSelector(state => state.basketSlice.id);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    dispatch(fetchIsAuth());
  }, []);

  useEffect(() => {
    if (!userId) return;

    dispatch(fetchBasket(userId));
  }, [userId]);

  useEffect(() => {
    if (!basketId) return;

    dispatch(fetchBasketProducts(basketId));
  }, [basketId]);

  return (
    <>
      <div className="container">
        <Paths />
      </div>
      <Toaster />
    </>
  )
}

export default App;