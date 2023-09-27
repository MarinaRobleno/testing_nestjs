import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateReport } from 'src/dtos/report.dto';

@Controller('reports')
@ApiTags('Reports')
export class ReportsController {
  @Get()
  findAll(): string {
    return 'This action returns all reports';
  }

  @Get(':id')
  findOne(): string {
    return 'This action returns a #${id} report';
  }

  @Post()
  @ApiOperation({
    summary: 'Create a new report',
    description: 'Fields required are: make, model, year, lng, lat, price',
  }) // Add a description for the request
  @ApiBody({ type: CreateReport, description: 'Report data for new one' })
  async createReport(@Body() createReportDto: CreateReport) {
    // You can use createReportDto to create a new report
    return createReportDto;
  }
}
