/*
 * This file is part of LiquidBounce (https://github.com/CCBlueX/LiquidBounce)
 *
 * Copyright (c) 2016 - 2021 CCBlueX
 *
 * LiquidBounce is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * LiquidBounce is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with LiquidBounce. If not, see <https://www.gnu.org/licenses/>.
 */

package net.ccbluex.liquidbounce.features.module.modules.movement

import net.ccbluex.liquidbounce.event.PlayerMovementTickEvent
import net.ccbluex.liquidbounce.event.handler
import net.ccbluex.liquidbounce.features.module.Category
import net.ccbluex.liquidbounce.features.module.Module
import net.ccbluex.liquidbounce.utils.extensions.moving
import net.ccbluex.liquidbounce.utils.extensions.strafe

object ModuleNoClip : Module("NoClip", Category.MOVEMENT) {

    val speed by float("Speed", 0.32f, 0.1f..0.4f)

    val moveHandler = handler<PlayerMovementTickEvent> {
        player.noClip = true
        player.fallDistance = 0f
        player.isOnGround = false

        val speed = speed.toDouble()
        if (player.moving) {
            player.strafe(speed = speed)
        }

        player.velocity.y = when {
            mc.options.keyJump.isPressed -> speed
            mc.options.keySneak.isPressed -> -speed
            else -> 0.0
        }
    }

    override fun disable() {
        player.noClip = false
    }

}

