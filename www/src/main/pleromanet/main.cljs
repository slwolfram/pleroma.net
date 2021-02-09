(ns pleromanet.main
  (:require [reagent.core :as r]
            ))

(defn password-box [pw]
  (let [s (r/atom {:value pw})]
    (fn []
      [:form
       (pr-str @s) [:br]
       [:input {:type :password
                :value (:value @s)
                :on-change #(swap! s assoc :value (-> % .-target .-value))}] [:br]
       [:label [:input {:type :checkbox
                        :checked (:show? @s)
                        :on-change #(swap! s assoc :show? (-> % .-target .-checked))}]
        "Show password?"]])))

(defn header []
  [:div
   [:h1 {:style {:margin "0 0 0 0"}} "pleroma|net"]
   ;;[password-box ""]
   ])
