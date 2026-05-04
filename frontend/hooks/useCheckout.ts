import { useMutation } from "@tanstack/react-query";
import api from "@/lib/axios";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

export const useCheckout = () => {
  const items = useSelector((state: RootState) => state.cart.items);

  return useMutation({
    mutationFn: async () => {
      const res = await api.post("/order/create-checkout-session", {
        userId: 1,
        items: items.map((item) => ({
          productId: item.id,
          quantity: item.quantity,
        })),
      });

      return res.data;
    },

    onSuccess: (data) => {
      if (data.url)
        window.location.href = data.url;
    },
  });
};