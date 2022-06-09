// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import BehanceSquareOutlinedSvg from '@ant-design/icons-svg/lib/asn/BehanceSquareOutlined';

export interface BehanceSquareOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const BehanceSquareOutlined: BehanceSquareOutlinedIconType = (props, context) => <Icon name='BehanceSquareOutlined' {...{ ...props, ...context.attrs }} icon={BehanceSquareOutlinedSvg} />;

BehanceSquareOutlined.displayName = 'BehanceSquareOutlined';

export default BehanceSquareOutlined;