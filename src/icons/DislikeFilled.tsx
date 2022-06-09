// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import DislikeFilledSvg from '@ant-design/icons-svg/lib/asn/DislikeFilled';

export interface DislikeFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const DislikeFilled: DislikeFilledIconType = (props, context) => <Icon name='DislikeFilled' {...{ ...props, ...context.attrs }} icon={DislikeFilledSvg} />;

DislikeFilled.displayName = 'DislikeFilled';

export default DislikeFilled;