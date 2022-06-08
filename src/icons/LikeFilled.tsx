// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import LikeFilledSvg from '@ant-design/icons-svg/lib/asn/LikeFilled';

export interface LikeFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const LikeFilled: LikeFilledIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={LikeFilledSvg} />;

LikeFilled.displayName = 'LikeFilled';

export default FunctionalComponent;