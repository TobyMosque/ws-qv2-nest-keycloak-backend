import { Test, TestingModule } from '@nestjs/testing';
import { JobController } from './job.controller';
import { JobService } from './job.service';

describe('JobController', () => {
  let jobController: JobController;

  beforeEach(async () => {
    const job: TestingModule = await Test.createTestingModule({
      controllers: [JobController],
      providers: [JobService],
    }).compile();

    jobController = job.get<JobController>(JobController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      // expect(jobController.getHello()).toBe('Hello World!');
    });
  });
});
