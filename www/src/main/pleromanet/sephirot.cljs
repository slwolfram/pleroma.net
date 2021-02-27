(ns pleromanet.sephirot
  (:require [ajax.core :refer [GET]]
            [reagent.core :as r]
            [re-frame.core :as rf]
            ))

(defn topic-form [sephira_id]
  (let [state (r/atom {:subject nil :body nil :file nil})]
    (fn []
      [:form {}]))
  )

(rf/reg-event-fx
 :get-topics
 (fn [cofx [_ sephira-id]]
   {:http-xhrio {:uri (str "http://192.168.0.104:8080/api/" sephira-id)
                 :method :get
                 :response-format (ajax/json-response-format {:keywords? true})
                 }})

(defn sephira [sephira-id title]
  (let [state (r/atom {:data "Loading..."})]

    (GET (str "http://192.168.0.104:8080/api/" sephira-id)
         :handler (fn [response]
                    (swap! state assoc :data response)))

    (fn []
      [:div {:style {:margin "0px 50px 0px 50px"}}
       [:h3 title]
       [:div {:id "topic-form"}
        ]
       [:div (pr-str (:data @state))]])))

(defn crown []
  [sephira "1/" "Crown - Topics"]
  )

(defn understanding []
  [sephira "2/" "Understanding - Topics"])

(defn wisdom []
  [sephira "3/" "Wisdom - Topics"])

(defn knowledge []
  [sephira "4/" "Knowledge - Topics"])

(defn strength []
  [sephira "5/" "Strength - Topics"])

(defn mercy []
  [sephira "6/" "Mercy - Topics"])

(defn beauty []
  [sephira "7/" "Beauty - Topics"])

(defn splendor []
  [sephira "8/" "Splendor - Topics"])

(defn victory []
  [sephira "9/" "Victory - Topics"])

(defn foundation []
  [sephira "10/" "Foundation - Topics"])

(defn kingdom []
  [sephira "11/" "Kingdom - Topics"])
