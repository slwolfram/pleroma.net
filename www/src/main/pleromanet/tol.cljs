(ns pleromanet.tol
  (:require ["react-router-dom" :refer (Link)])
)

(def radius 125)
(def s-radius 30)
(def center {:x (+ radius (* 3 s-radius)) :y (+ radius (* 3 s-radius))})
(def center-1 {:x (:x center) :y (+ (* 2 radius) (:y center))})

(def crown {:key "crown" :id "crown" :cx (:x center) :cy (- (:y center) radius) :fill "#FFF"})
(def understanding {:key "understanding" :id "understanding" :cx (- (:x center) (* radius (/ 7 8))) :cy (- (:y center) (/ radius 2)) :fill "#200080"})
(def wisdom {:key "wisdom" :id "wisdom" :cx (+ (:x center) (* radius (/ 7 8))) :cy (- (:y center) (/ radius 2)) :fill "#f5ffb3"})
(def knowledge {:key "knowledge" :id "knowledge" :cx (:x center) :cy (:y center) :fill "none"})
(def strength {:key "strength" :id "strength" :cx (- (:x center) (* radius (/ 7 8))) :cy (+ (:y center) (/ radius 2)) :fill "#ff0000"})
(def mercy {:key "mercy" :id "mercy" :cx (+ (:x center) (* radius (/ 7 8))) :cy (+ (:y center) (/ radius 2)) :fill "#0000ff"})
(def beauty {:key "beauty" :id "beauty" :cx (:x center) :cy (+ (:y center) radius) :fill "#DEFF00"})
(def splendor {:key "splendor" :id "splendor" :cx (- (:x center-1) (* radius (/ 7 8))) :cy (- (:y center-1) (/ radius 2))  :fill "#ff8000"})
(def victory {:key "victory" :id "victory" :cx (+ (:x center-1) (* radius (/ 7 8))) :cy (- (:y center-1) (/ radius 2)) :fill "#0B6623"})
(def foundation {:key "foundation" :id "foundation" :cx (:x center) :cy (+ (:y center) (* 2 radius)) :fill "#8000ff"})
(def kingdom {:key "kingdom" :id "kingdom" :cx (:x center) :cy (+ (:y center) (* 3 radius)) :fill "#161a00"})

(defn get-path-coords [from to]
  {:x1 (:cx from) :y1 (:cy from) :x2 (:cx to) :y2 (:cy to)})

(defn create-path [name from to]
  (. js/console log name)

   (let [coords (get-path-coords from to)]
     [:g {:key (str name "-g")}
     [:line (assoc coords
                  :key (str name "-ring") :id (str name "-ring") :class "path"
                  :style {:stroke "#DEFF00" :stroke-width "17"})]
     [:line (assoc coords
                  :key name :id name :class "path"
                  :style {:stroke "#161a00" :stroke-width "15"})]

      [:> Link {:to (str "/" name)}
       [:text {:x (/ (+ (:x1 coords) (:x2 coords)) 2)
               :y (/ (+ (:y1 coords) (:y2 coords)) 2)
               :fill "red" :id (str name "-text")}
        name]]]))

(defn paths []
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
              ["moon" kingdom victory]]]
    (apply create-path args)))


(def stroke-w 15)
(def stroke-w-1 1)
(def radius-1 (+ radius s-radius 10))
(def radius-2 (+ radius-1 50))
(def dark-chartreuse "#586600")

(defn tol []
  [:svg {:id "tol" :key "tol" :height (str (* 6 radius)) :width (str (* 4 radius)) :class ""}
   [:circle {:key "1" :id "1" :cx (:cx knowledge) :cy (:cy knowledge) :r (str radius-1) :style {:stroke dark-chartreuse :fill "none" :stroke-width (str stroke-w-1)}}]
   [:circle {:key "2" :id "2" :cx (:cx knowledge) :cy (:cy knowledge) :r (str radius-2) :style {:stroke dark-chartreuse :fill "none" :stroke-width (str stroke-w-1)}}]
   [:circle {:key "3" :id "3" :cx (:cx beauty) :cy (:cy beauty) :r (str radius-1) :style {:stroke dark-chartreuse :fill "none" :stroke-width (str stroke-w-1)}}]
   [:circle {:key "4" :id "4" :cx (:cx beauty) :cy (:cy beauty) :r (str radius-2) :style {:stroke dark-chartreuse :fill "none" :stroke-width (str stroke-w-1)}}]
   [:circle {:key "5" :id "5" :cx (:cx foundation) :cy (:cy foundation) :r (str radius-1) :style {:stroke dark-chartreuse :fill "none" :stroke-width (str stroke-w-1)}}]
   [:circle {:key "6" :id "6" :cx (:cx foundation) :cy (:cy foundation) :r (str radius-2) :style {:stroke dark-chartreuse :fill "none" :stroke-width (str stroke-w-1)}}]
   [:circle {:key "ein-soph" :id "ein-soph" :cx (:cx crown) :cy (:cy crown) :r (str (* 2.5 s-radius)) :style {:stroke "#DEFF00" :fill "#DEFF00" :stroke-width 2}}]
   [:circle {:key "ein-soph-aur" :id "ein-soph-aur" :cx (:cx crown) :cy (:cy crown) :r (str (* 2 s-radius)) :style {:stroke "white" :fill "white" :stroke-width 2}}]
   (paths)
   (map #(identity
          [:g {:key (str (:id %) "-g")}
           [:circle (assoc % :key (:id %) :class "sephirot" :r (str s-radius) :stroke "#DEFF00" :stroke-width (str stroke-w))]
           [:circle (assoc % :key (str (:id %) "-1") :id (str (:id %) "-1") :class "sephirot" :r (str s-radius) :fill "none" :stroke "#586600" :stroke-width (str (/ stroke-w 1.25)))]
           [:> Link {:to (str "/" (:id %))}
            [:text {:x (:cx %) :y (:cy %) :fill "#FF69B4" :style {:text-anchor "middle"}} (:id %)]]])
        [crown understanding wisdom knowledge strength mercy beauty splendor victory foundation kingdom])])

