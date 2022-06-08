// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import BulbTwoToneSvg from '@ant-design/icons-svg/lib/asn/BulbTwoTone';

export interface BulbTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const BulbTwoTone: BulbTwoToneIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={BulbTwoToneSvg} />;

BulbTwoTone.displayName = 'BulbTwoTone';

export default FunctionalComponent;