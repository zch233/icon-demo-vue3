// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import BulbFilledSvg from '@ant-design/icons-svg/lib/asn/BulbFilled';

export interface BulbFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const BulbFilled: BulbFilledIconType = (props, context) => <Icon name='BulbFilled' {...{ ...props, ...context.attrs }} icon={BulbFilledSvg} />;

BulbFilled.displayName = 'BulbFilled';

export default BulbFilled;