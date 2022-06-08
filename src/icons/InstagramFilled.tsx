// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import InstagramFilledSvg from '@ant-design/icons-svg/lib/asn/InstagramFilled';

export interface InstagramFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const InstagramFilled: InstagramFilledIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={InstagramFilledSvg} />;

InstagramFilled.displayName = 'InstagramFilled';

export default InstagramFilled;