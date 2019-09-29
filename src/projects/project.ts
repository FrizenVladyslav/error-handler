import { ApiModelProperty } from '@nestjs/swagger';

export class Project {
  @ApiModelProperty()
  id: number;

  @ApiModelProperty()
  name: string;
}
