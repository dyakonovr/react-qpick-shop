import { Toaster } from "@/components/ui/toaster";
import { useEffect } from "react";
import fetchBasket from "./api/fetchBasket";
import fetchIsAuth from "./api/fetchIsAuth";
import Paths from "./components/routes/Paths";
import { useAppDispatch } from "./hooks/useAppDispatch";
import { useAppSelector } from "./hooks/useAppSelector";
import fetchBasketProducts from "./api/fetchBasketProducts";

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