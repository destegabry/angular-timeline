/**
 * Angular directive to display an interactive visualization chart to visualize events in time, 
 * relaying on Almende's Timeline (http://almende.github.io/chap-links-library/timeline.html)
 * @author Gabriele Destefanis
 * @version 0.1.0
 */

'use strict';


angular.module('destegabry.timeline', [])
  .directive('timeline', function() {

    var ItemRangePopup = function(data, options) {
      links.Timeline.ItemRange.call(this, data, options);
    };

    ItemRangePopup.prototype = new links.Timeline.ItemRange();

    ItemRangePopup.prototype.updateDOM = function() {
      var divBox = this.dom;
      if (divBox) {

        divBox.className = "timeline-event timeline-event-range timeline-event-range-popup ui-widget ui-state-default";
        divBox.style.height = "22px";

        if (this.content) {
          $(divBox).tooltip({
            'placement': 'top',
            'html': true,
            'title': this.content,
            'container': 'body'
          });
        }

        if (this.isCluster) {
          links.Timeline.addClassName(divBox, 'timeline-event-cluster ui-widget-header');
        }

        if (this.className) {
          links.Timeline.addClassName(divBox, this.className);
        }
      }
    };

    return {
      restrict: 'A',
      scope: {
        model: '=timeline',
        options: '=timelineOptions',
        selection: '=timelineSelection'
      },
      link: function($scope, $element) {
        var timeline = new links.Timeline($element[0]);
        timeline.addItemType('range-popup', ItemRangePopup);

        links.events.addListener(timeline, 'select', function() {
          $scope.selection = undefined;
          var sel = timeline.getSelection();
          if (sel[0]) {
             $scope.$apply(function () {
            $scope.selection = $scope.model[sel[0].row];
             })
          }
        });

        $scope.$watch('model', function(newVal, oldVal) {
          timeline.setData(newVal);
          timeline.setVisibleChartRangeAuto();
        },true);

        $scope.$watch('options', function(newVal, oldVal) {
          timeline.draw($scope.model, $scope.options);
        },true);

        $scope.$watch('selection', function(newVal, oldVal) {
          if (!angular.equals(newVal, oldVal)) {
            for (var i = $scope.model.length - 1; i >= 0; i--) {
              if (angular.equals($scope.model[i], newVal)) {
                timeline.setSelection([{
                  row: i
                }]);
                break;
              }
            };
          }
        });
      }
    };
  });
