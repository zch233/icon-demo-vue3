// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import EuroCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/EuroCircleTwoTone';

export interface EuroCircleTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const EuroCircleTwoTone: EuroCircleTwoToneIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={EuroCircleTwoToneSvg} />;

EuroCircleTwoTone.displayName = 'EuroCircleTwoTone';

export default EuroCircleTwoTone;