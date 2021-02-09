(ns pleromanet.core
  (:require [reagent.core :as r]
            [pleromanet.routes :as routes]
            ))

(defn about []
  [:h2 "About"])

(defn mount! []
  (r/render [routes/root] (.getElementById js/document "app")))

(defn init! []
  (mount!))

(defn reload! [] (mount!))

