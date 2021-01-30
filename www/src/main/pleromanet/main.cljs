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

(def crown {:key "crown" :id "crown"
            :cx "150" :cy "50" :fill "#FFF"})
(def understanding {:key "understanding" :id "understanding"
                    :cx "50" :cy "100" :fill "#200080"})
(def wisdom {:key "wisdom" :id "wisdom"
             :cx "250" :cy "100" :fill "#f5ffb3"})
(def knowledge {:key "knowledge" :id "knowledge"
                :cx "150" :cy "150" :fill "none"})
(def strength {:key "strength" :id "strength"
               :cx "50" :cy "200" :fill "#ff0000"})
(def mercy {:key "mercy" :id "mercy"
            :cx "250" :cy "200" :fill "#0000ff"})
(def beauty {:key "beauty" :id "beauty"
             :cx "150" :cy "250" :fill "#DEFF00"})
(def splendor {:key "splendor" :id "splendor"
               :cx "50" :cy "300" :fill "#ff8000"})
(def victory {:key "victory" :id "victory"
              :cx "250" :cy "300" :fill "#586600"})
(def foundation {:key "foundation" :id "foundation"
                 :cx "150" :cy "350" :fill "#8000ff"})
(def kingdom {:key "kingdom" :id "kingdom"
              :cx "150" :cy "450" :fill "#161a00"})

(defn get-path-coords [from to]
  {:x1 (:cx from) :y1 (:cy from) :x2 (:cx to) :y2 (:cy to)})

(defn create-path [name from to]
  (. js/console log name)
  [:line (assoc (get-path-coords from to)
                :key name :id name :class "path"
                :style {:stroke "#DEFF00" :stroke-width "5"})])

(defn tol []
  [:svg {:id "tol" :height "500" :width "300" :class ""}
   [:circle {:key "" :id "" :cx (:cx knowledge) :cy (:cy knowledge)
             :r "140" :style {:stroke "#DEFF00" :stroke-width "2"}}]
   (for [args [["magus" crown understanding]
               ["high-priestess" crown beauty]
               ["fool" crown wisdom]
               ["empress" understanding wisdom]
               ["chariot" understanding strength]
               ["lovers" understanding beauty]
               ["star" wisdom beauty]
               ["heirophant" wisdom mercy]
               ["lust" strength mercy]
               ["hanged-man" strength splendor]
               ["adjustment" strength beauty]
               ["devil" splendor beauty]
               ["hermit" beauty mercy]
               ["wheel-of-fortune" mercy victory]
               ["death" beauty victory]
               ["art" beauty foundation]
               ["tower" splendor victory]
               ["sun" splendor foundation]
               ["emperor" foundation victory]
               ["aeon" splendor kingdom]
               ["universe" foundation kingdom]
               ["moon" kingdom victory]
               ]]
     (apply create-path args))
   (map #(identity
          [:circle (assoc % :class "sephirot" :r "20"
                          :stroke "#DEFF00" :stroke-width "5")])
        [crown understanding wisdom knowledge strength mercy beauty
         splendor victory foundation kingdom])])

(defn app []
  [:div
   [header]
   [tol]])

(defn mount! []
  (r/render [app] (.getElementById js/document "app")))

(defn main! [] (mount!))

(defn reload! [] (mount!))
