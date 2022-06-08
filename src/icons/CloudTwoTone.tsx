// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import CloudTwoToneSvg from '@ant-design/icons-svg/lib/asn/CloudTwoTone';

export interface CloudTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const CloudTwoTone: CloudTwoToneIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={CloudTwoToneSvg} />;

CloudTwoTone.displayName = 'CloudTwoTone';

export default CloudTwoTone;