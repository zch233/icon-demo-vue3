// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import TwitterCircleFilledSvg from '@ant-design/icons-svg/lib/asn/TwitterCircleFilled';

export interface TwitterCircleFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const TwitterCircleFilled: TwitterCircleFilledIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={TwitterCircleFilledSvg} />;

TwitterCircleFilled.displayName = 'TwitterCircleFilled';

export default TwitterCircleFilled;