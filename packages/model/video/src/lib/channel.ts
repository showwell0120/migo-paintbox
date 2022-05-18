// TODO: fufill row type
export interface RowData {
  titles: unknown[];
  moviesCount: () => number;
  seriesCount: () => number;
}

export class Channel {
  public id = '';
  public name = '';
  public active = false;
  public createDate: Date = new Date();
  public updateDate: Date = new Date();
  public rows: RowData[] = [];
  public avatarID = '';
  public avatarUrl = '';
  public bannerID = '';
  public bannerUrl = '';

  constructor(props: Partial<Channel>) {
    Object.assign(this, props);
  }

  rowsCount() {
    return this.rows.length;
  }

  moviesCount() {
    return this.rows.reduce((accumulator, row) => {
      const titlesCount = row.moviesCount();
      return accumulator + titlesCount;
    }, 0);
  }

  seriesCount() {
    return this.rows.reduce((accumulator, row) => {
      const titlesCount = row.seriesCount();
      return accumulator + titlesCount;
    }, 0);
  }

  titlesCount() {
    return this.rows.reduce((accumulator, row) => {
      const titlesCount = row.titles.length;
      return accumulator + titlesCount;
    }, 0);
  }

  setActive(active: boolean) {
    this.active = active;
  }
}
