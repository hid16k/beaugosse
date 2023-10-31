import { Component, Input } from '@angular/core';
import { TrendingMovieResults, TrendingTvResults, PopularMovieResults, PopularTvResults, TopRatedMovieResults, TopRatedTvResults } from '../media-data-types.component';

@Component({
  selector: 'app-media-item',
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.css']
})

export class MediaItemComponent {
  @Input() title!: string;
  @Input() itemList!: any;
}
