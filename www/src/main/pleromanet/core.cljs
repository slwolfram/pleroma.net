(ns pleromanet.core
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            [pleromanet.routes :as routes]
            [pleromanet.events :as events]))

(defn about []
  [:h2 "About"])

(defn mount! []
  (r/render [routes/root] (.getElementById js/document "app")))

(defn init! []
  (rf/dispatch [::events/initialize-db])
  (mount!))

(defn reload! [] (mount!))

