// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import ApiFilledSvg from '@ant-design/icons-svg/lib/asn/ApiFilled';

export interface ApiFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const ApiFilled: ApiFilledIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={ApiFilledSvg} />;

ApiFilled.displayName = 'ApiFilled';

export default FunctionalComponent;