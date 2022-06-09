// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import CompassFilledSvg from '@ant-design/icons-svg/lib/asn/CompassFilled';

export interface CompassFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const CompassFilled: CompassFilledIconType = (props, context) => <Icon name='CompassFilled' {...{ ...props, ...context.attrs }} icon={CompassFilledSvg} />;

CompassFilled.displayName = 'CompassFilled';

export default CompassFilled;