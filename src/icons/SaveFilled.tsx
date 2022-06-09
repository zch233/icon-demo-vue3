// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import SaveFilledSvg from '@ant-design/icons-svg/lib/asn/SaveFilled';

export interface SaveFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const SaveFilled: SaveFilledIconType = (props, context) => <Icon name='SaveFilled' {...{ ...props, ...context.attrs }} icon={SaveFilledSvg} />;

SaveFilled.displayName = 'SaveFilled';

export default SaveFilled;