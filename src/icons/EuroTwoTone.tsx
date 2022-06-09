// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import EuroTwoToneSvg from '@ant-design/icons-svg/lib/asn/EuroTwoTone';

export interface EuroTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const EuroTwoTone: EuroTwoToneIconType = (props, context) => <Icon name='EuroTwoTone' {...{ ...props, ...context.attrs }} icon={EuroTwoToneSvg} />;

EuroTwoTone.displayName = 'EuroTwoTone';

export default EuroTwoTone;