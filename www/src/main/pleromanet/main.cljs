(ns pleromanet.main
  (:require [reagent.core :as r]))

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

(defn sephirot [name ]
  ) 

(def crown {:key "crown" :id "crown" :cx "150" :cy "50" :fill "#FFF"})
(def understanding {:key "understanding" :id "understanding" :cx "50" :cy "100" :fill "#200080"})
(def wisdom {:key "wisdom" :id "wisdom" :cx "250" :cy "100" :fill "#f5ffb3"})
(def knowledge {:key "knowledge" :id "knowledge" :cx "150" :cy "150" :fill "none"})
(def strength {:key "strength" :id "strength" :cx "50" :cy "200" :fill "#ff0000"})
(def mercy {:key "mercy" :id "mercy" :cx "250" :cy "200" :fill "#0000ff"})
(def beauty {:key "beauty" :id "beauty" :cx "150" :cy "250" :fill "#DEFF00"})
(def splendor {:key "splendor" :id "splendor" :cx "50" :cy "300" :fill "#ff8000"})
(def victory {:key "victory" :id "victory" :cx "250" :cy "300" :fill "#586600"})
(def foundation {:key "foundation" :id "foundation" :cx "150" :cy "350" :fill "#8000ff"})
(def kingdom {:key "kingdom" :id "kingdom" :cx "150" :cy "450" :fill "#161a00"})


(defn get-path-coords [from to]
  {:x1 (:cx from) :y1 (:cy from) :x2 (:cx to) :y2 (:cy to)})

(defn create-path [name from to]
  (. js/console log name)
  [:line (assoc (get-path-coords from to) 
                :key name :id name :class "path" 
                :style {:stroke "#DEFF00" :stroke-width "5"})])


(defn tol []
  [:svg {:id "tol" :height "500" :width "300" :class ""}
   [:circle {:key "" :id "" :cx "150" :cy "150" :r "140" :style {:stroke "#DEFF00" :stroke-width "2"}}]



   (for [args [["magus" crown understanding]
               ["high-priestess" crown beauty]
               ["fool" crown wisdom]
               ["empress" understanding wisdom]
               ["chariot" understanding strength]
               ["lovers" understanding beauty]
               ["star" wisdom beauty]
               ["heirophant" wisdom mercy]
               ["lust" strength mercy]
               ]]
     (apply create-path args))

   (map #(identity
          [:line (assoc % :class "path" :style {:stroke "#DEFF00" :stroke-width "5"})])
        [
         {:key "hanged-man" :id "hanged-man"
          :x1 "50" :y1 "200"
          :x2 "50" :y2 "300"}
          {:key "adjustment" :id "adjustment" :x1 "50" :y1 "200" :x2 "150" :y2 "250"}
          {:key "devil" :id "devil" :x1 "50" :y1 "300" :x2 "150" :y2 "250"}
          {:key "hermit" :id "hermit" :x1 "250" :y1 "200" :x2 "150" :y2 "250"}
          {:key "wheel-of-fortune" :id "wheel-of-fortune" :x1 "250" :y1 "200" :x2 "250" :y2 "300"}
          {:key "death" :id "death" :x1 "250" :y1 "300" :x2 "150" :y2 "250"}
          {:key "art" :id "art" :x1 "150" :y1 "250" :x2 "150" :y2 "350"}
          {:key "tower" :id "tower" :x1 "50" :y1 "300" :x2 "250" :y2 "300"}
          {:key "sun" :id "sun" :x1 "50" :y1 "300" :x2 "150" :y2 "350"}
          {:key "emperor" :id "emperor" :x1 "150" :y1 "350" :x2 "250" :y2 "300"}
          {:key "aeon" :id "aeon" :x1 "50" :y1 "300" :x2 "150" :y2 "450"}
          {:key "universe" :id "universe" :x1 "150" :y1 "350" :x2 "150" :y2 "450"}
          {:key "moon" :id "moon" :x1 "250" :y1 "300" :x2 "150" :y2 "450"}])
   (. js/console log kingdom)
   (map #(identity
          [:circle (assoc % :class "sephirot" :r "20" :stroke "#DEFF00" :stroke-width "5")])
        [crown understanding wisdom knowledge strength mercy beauty splendor victory foundation kingdom])])

(defn app []
  [:div
   [header]
   [tol]])

(defn mount! []
  (r/render [app] (.getElementById js/document "app")))

(defn main! [] (mount!))

(defn reload! [] (mount!))
