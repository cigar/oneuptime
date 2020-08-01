const express = require('express');
const router = express.Router();

const { isAuthorized } = require('../middlewares/authorization');

const { getUser, checkUserBelongToProject } = require('../middlewares/user');

const ScheduledEventService = require('../services/scheduledEventService');

const sendErrorResponse = require('../middlewares/response').sendErrorResponse;
const sendListResponse = require('../middlewares/response').sendListResponse;
const sendItemResponse = require('../middlewares/response').sendItemResponse;

router.post('/:projectId', getUser, isAuthorized, async function(req, res) {
    try {
        const projectId = req.params.projectId;
        const data = req.body;
        data.createdById = req.user ? req.user.id : null;

        if (!data) {
            return sendErrorResponse(req, res, {
                code: 400,
                message: "Values can't be null",
            });
        }

        if (!data.name || !data.name.trim()) {
            return sendErrorResponse(req, res, {
                code: 400,
                message: 'Event name is required.',
            });
        }

        if (typeof data.name !== 'string') {
            return sendErrorResponse(req, res, {
                code: 400,
                message: 'Event name is not of string type.',
            });
        }

        // data.monitors should be an array containing id of monitor(s)
        if (data.monitors && !Array.isArray(data.monitors)) {
            return sendErrorResponse(req, res, {
                code: 400,
                message: 'Monitors is not of type array',
            });
        }

        if (!projectId) {
            return sendErrorResponse(req, res, {
                code: 400,
                message: 'Project ID is required.',
            });
        }

        if (typeof projectId !== 'string') {
            return sendErrorResponse(req, res, {
                code: 400,
                message: 'Project ID  is not of string type.',
            });
        }

        if (!data.startDate) {
            return sendErrorResponse(req, res, {
                code: 400,
                message: 'Start timestamp is required.',
            });
        }

        if (!data.endDate) {
            return sendErrorResponse(req, res, {
                code: 400,
                message: 'End timestamp is required.',
            });
        }

        if (data.startDate > data.endDate) {
            return sendErrorResponse(req, res, {
                code: 400,
                message: 'Start date should always be less than End date',
            });
        }

        if (!data.description || !data.description.trim()) {
            return sendErrorResponse(req, res, {
                code: 400,
                message: 'Event description is required.',
            });
        }

        if (typeof data.description !== 'string') {
            return sendErrorResponse(req, res, {
                code: 400,
                message: 'Event description is not of string type.',
            });
        }

        const existingScheduledEvent = await ScheduledEventService.findOneBy({
            name: data.name,
            projectId: projectId,
        });

        if (existingScheduledEvent) {
            return sendErrorResponse(req, res, {
                code: 400,
                message: 'Scheduled event name already exists',
            });
        }

        const scheduledEvent = await ScheduledEventService.create(
            { projectId },
            data
        );

        return sendItemResponse(req, res, scheduledEvent);
    } catch (error) {
        return sendErrorResponse(req, res, error);
    }
});

router.put('/:projectId/:eventId', getUser, isAuthorized, async function(
    req,
    res
) {
    try {
        const data = req.body;
        const { eventId, projectId } = req.params;

        if (!data) {
            return sendErrorResponse(req, res, {
                code: 400,
                message: "Values can't be null",
            });
        }

        if (!data.name || !data.name.trim()) {
            return sendErrorResponse(req, res, {
                code: 400,
                message: 'Event name is required.',
            });
        }

        if (typeof data.name !== 'string') {
            return sendErrorResponse(req, res, {
                code: 400,
                message: 'Event name is not of string type.',
            });
        }

        if (!projectId) {
            return sendErrorResponse(req, res, {
                code: 400,
                message: 'Project ID is required.',
            });
        }

        if (typeof projectId !== 'string') {
            return sendErrorResponse(req, res, {
                code: 400,
                message: 'Project ID  is not of string type.',
            });
        }

        if (!eventId) {
            return sendErrorResponse(req, res, {
                code: 400,
                message: 'Event ID is required',
            });
        }

        if (typeof eventId !== 'string') {
            return sendErrorResponse(req, res, {
                code: 400,
                message: 'Event ID is not of string type',
            });
        }

        if (!data.startDate) {
            return sendErrorResponse(req, res, {
                code: 400,
                message: 'Start timestamp is required.',
            });
        }

        if (!data.endDate) {
            return sendErrorResponse(req, res, {
                code: 400,
                message: 'End timestamp is required.',
            });
        }

        if (data.startDate > data.endDate) {
            return sendErrorResponse(req, res, {
                code: 400,
                message: 'Start date should always be less than End date',
            });
        }

        if (!data.description || !data.description.trim()) {
            return sendErrorResponse(req, res, {
                code: 400,
                message: 'Event description is required.',
            });
        }

        if (typeof data.description !== 'string') {
            return sendErrorResponse(req, res, {
                code: 400,
                message: 'Event description is not of string type.',
            });
        }

        const existingScheduledEvent = await ScheduledEventService.findOneBy({
            name: data.name,
            projectId,
        });

        if (String(existingScheduledEvent._id) !== String(eventId)) {
            return sendErrorResponse(req, res, {
                code: 400,
                message: 'Scheduled event name already exists',
            });
        }

        const scheduledEvent = await ScheduledEventService.updateOneBy(
            { _id: eventId },
            data
        );

        return sendItemResponse(req, res, scheduledEvent);
    } catch (error) {
        return sendErrorResponse(req, res, error);
    }
});

router.delete('/:projectId/:eventId', getUser, isAuthorized, async function(
    req,
    res
) {
    try {
        const userId = req.user ? req.user.id : null;
        const { eventId } = req.params;

        const event = await ScheduledEventService.deleteBy(
            { _id: eventId },
            userId
        );

        return sendItemResponse(req, res, event);
    } catch (error) {
        return sendErrorResponse(req, res, error);
    }
});

router.get('/:projectId', getUser, isAuthorized, async function(req, res) {
    try {
        const { projectId } = req.params;

        const query = req.query;

        if (!projectId) {
            return sendErrorResponse(req, res, {
                code: 400,
                message: 'Project ID is required.',
            });
        }

        if (typeof projectId !== 'string') {
            return sendErrorResponse(req, res, {
                code: 400,
                message: 'Project ID is not of string type.',
            });
        }

        const events = await ScheduledEventService.findBy(
            { projectId },
            query.limit,
            query.skip
        );
        const count = await ScheduledEventService.countBy({
            projectId,
        });
        return sendListResponse(req, res, events, count);
    } catch (error) {
        return sendErrorResponse(req, res, error);
    }
});

router.get(
    '/:projectId/:monitorId/statusPage',
    checkUserBelongToProject,
    async function(req, res) {
        try {
            const projectId = req.params.projectId;
            const monitorId = req.params.monitorId;

            const query = req.query;

            if (!projectId) {
                return sendErrorResponse(req, res, {
                    code: 400,
                    message: 'Project ID is required.',
                });
            }

            if (typeof projectId !== 'string') {
                return sendErrorResponse(req, res, {
                    code: 400,
                    message: 'Project ID is not of string type.',
                });
            }

            if (!monitorId) {
                return sendErrorResponse(req, res, {
                    code: 400,
                    message: 'Monitor ID is required.',
                });
            }

            if (typeof monitorId !== 'string') {
                return sendErrorResponse(req, res, {
                    code: 400,
                    message: 'Monitor ID is not of string type.',
                });
            }
            const events = await ScheduledEventService.findBy(
                { projectId, monitorId, showEventOnStatusPage: true },
                query.limit,
                query.skip
            );
            const count = await ScheduledEventService.countBy({
                projectId,
                monitorId,
                showEventOnStatusPage: true,
            });
            return sendListResponse(req, res, events, count);
        } catch (error) {
            return sendErrorResponse(req, res, error);
        }
    }
);

module.exports = router;
